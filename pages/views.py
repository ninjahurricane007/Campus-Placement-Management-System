from base64 import urlsafe_b64decode
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from django.contrib.auth.models import User, auth
from django.contrib.auth.hashers import make_password
from django.contrib.auth.forms import UserCreationForm
from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template
from django.template import Context
from pages.models import Drives, Profile, Registered
from django.contrib.auth.decorators import login_required
from bs4 import BeautifulSoup 
import requests
import urllib.request
from django.db.models import Count
from django.shortcuts import get_object_or_404
from django.http import FileResponse, Http404
import os
import pandas as pd
from django.shortcuts import render
from .models import Student
from .models import Placedstudent
from .models import UserProfile
from django.utils.crypto import get_random_string
import uuid as uuid
from django.views.decorators.csrf import csrf_exempt
from django.utils.timezone import now
import datetime
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.http import urlsafe_base64_decode



def home(request):
    return render(request, 'pages/home.html')

def main(request):
    return render(request, 'pages/home.html')

def landing(request):
    return render(request, 'pages/fests.html')

def excelfile(request):
    return render(request, 'pages/excelfile.html')

def excelfiles(request):
    return render(request, 'pages/excelfiles.html')

def arithmetic(request):
    return render(request, 'pages/arithmetic.html')

def reasoning(request):
    return render(request, 'pages/reasoning.html')

def cquiz(request):
    return render(request, 'pages/cquiz.html')


@csrf_exempt
def user_login(request):
    # print('hello')
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('/home')
        else:
            messages.info(request,'Invalid username or password')
            return redirect('/login')
    else:
        return render(request,'userreg/login.html')
    
    
def resetpass(request,id):
    return render(request, 'userreg/resetpass.html')


def forgot_password(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        User = get_user_model()
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            messages.error(request, 'This email is not registered with us.')
            return redirect('/forgot_password')

        uidb64 = urlsafe_base64_encode(str(user.id).encode())
        token = default_token_generator.make_token(user)
        reset_url = f'http://127.0.0.1:8000/reset_password/{uidb64}/{token}'
        # print(uidb64)
        # print(token)
        subject = 'Reset Password'
        message = f'Set your new password: {reset_url}'
        from_email = 'placementcellasiet@outlook.com'
        recipient_list = [user.email]
        try:
            send_mail(subject, message, from_email, recipient_list, html_message=message)
            messages.success(request, 'Your password reset link has been sent to your email.')
        except Exception as e:
            messages.error(request, f'Failed to send password reset email: {str(e)}')

        return redirect('/login')

    return render(request, 'userreg/forgot_password.html')



@csrf_exempt
def reset_password(request, uidb64, token):
    # print(uidb64)
    # print(token)
    if request.method == 'POST':
        newpass = request.POST['newpass']
        conpass = request.POST['conpass']
        # print(uidb64)
        # print(token)
        if newpass == conpass:
            User = get_user_model()
            try:
                uid = urlsafe_base64_decode(uidb64).decode()
                user = User.objects.get(pk=uid)
            except (TypeError, ValueError, OverflowError, User.DoesNotExist):
                user = None
            if user is not None and default_token_generator.check_token(user, token):
                user.set_password(newpass)
                user.save()
                messages.success(request, 'Password updated successfully')
                return redirect('/login')
            else:
                messages.error(request, 'Invalid token or user does not exist')
                return redirect(f'/reset_password/{uidb64}/{token}/')
        else:
            messages.error(request, 'Passwords do not match')
            return redirect(f'/reset_password/{uidb64}/{token}/')
    else:
        uidb64 = request.GET.get('uidb64')
        token = request.GET.get('token')
        return render(request, 'userreg/resetpass.html', {'uidb64': uidb64, 'token': token})

            
@csrf_exempt
def user_logout(request):
    logout(request)
    messages.success(request,("You Were Logged Out!"))
    return redirect('/')

@csrf_exempt
def user_signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        if password.isnumeric():
            messages.info(request,'Password should include atleast one alphabet')
            return redirect('user_signup')
        elif password.isalpha():
            messages.info(request,'password should include atleast one number')
            return redirect('user_signup')
        hashed_password = make_password(password)
        email = request.POST['email']
        regno = request.POST['regno']
        if User.objects.filter(email=email).exists():
            messages.info(request,'Already have an account with same email id')
            return redirect('user_signup')
        elif UserProfile.objects.filter(regno=regno).exists():
            messages.info(request, 'An account with this register number already exists.')
            return redirect('user_signup')
        else:
            user = User(username=username,password=hashed_password,email=email)
            user.save()
            # print(user)
            user_profile = UserProfile(user=user, regno=regno)
            user_profile.save()
            prof = Profile(user=user)
            prof.save()
            # print(prof)
            user = authenticate(request, username=username, password=password)
            login(request,user)
            return redirect('/home')
    return render(request,'userreg/signup.html')

@csrf_exempt
@login_required
def profile(request):
    user = request.user
    studentcs = Student.objects.all()
    for student in studentcs:
        if user.userprofile.regno == student.roll_no:
            user.profile.cgpa = student.cgpa
            user.profile.bklgs = student.bklgs
            user.profile.save()
            break
    return render(request, 'pages/profile.html', {'user': user})

@csrf_exempt
@login_required(login_url='/auth/login')
def editprofile(request):
    try:
        prof = Profile.objects.get(user=request.user)
    except Profile.DoesNotExist:
        prof = Profile(user=request.user)
        prof.save()
    if request.method == 'POST':
        ph_num1 = request.POST.get('ph_num')
        addr1 = request.POST.get('addr')
        clg_name1 = request.POST.get('clg_name')
        sem1 = request.POST.get('sem')
        brch1 = request.POST.get('brch')
        website1 = request.POST.get('website')
        github1 = request.POST.get('github')
        linkedin1 = request.POST.get('linkedin')
        stkoflw1 = request.POST.get('stkoflw')
        codechef1 = request.POST.get('codechef')
        dp_img1 = request.FILES.get('dp_img')
        resume1 = request.FILES.get('resume')
        
        Prof = Profile.objects.get(user=request.user)
        profile = Profile(ph_num=ph_num1 if ph_num1 else Prof.ph_num,addr=addr1 if addr1 else Prof.addr,clg_name=clg_name1 if clg_name1 else Prof.clg_name,sem=sem1 if sem1 else Prof.sem,brch=brch1 if brch1 else Prof.brch, website=website1 if website1 else Prof.website,github=github1 if github1 else Prof.github,linkedin=linkedin1 if linkedin1 else Prof.linkedin,stkoflw=stkoflw1 if stkoflw1 else Prof.stkoflw,codechef=codechef1 if codechef1 else Prof.codechef,dp_img=dp_img1 if dp_img1 else Prof.dp_img,resume=resume1 if resume1 else Prof.resume,user=request.user,isCordinator=Prof.isCordinator)
        profile.save()
        return redirect('/profile')
    return render(request,'pages/editprofile.html', {'profile': prof})


def view_resume(request):
    profile = get_object_or_404(Profile, user=request.user)
    resume = profile.resume   

    return FileResponse(resume.file, as_attachment=True)


@login_required(login_url='/auth/login')
def offc(request):
    try:
        urllib.request.urlopen('http://google.com') 
        i=1
        s='{% extends "../pages/base.html" %}{% load static %}{% block title %}Off Campus{% endblock title %}{% block head %}<link rel="stylesheet" href="/static/offc.css">{% endblock head %}'
        b='{% block body %}'
        be='{% endblock body %}'
        c='<link href="/static/offc.css" rel="stylesheet" type="text/css" />'
        html_text=requests.get('https://offcampusjobs4u.com/').text
        soup = BeautifulSoup(html_text, 'lxml')
        jobs = soup.find_all('div',class_ ='tdb_module_loop td_module_wrap td-animation-stack td-cpt-post')
        with open(f'templates\pages\offc.html','w') as f :
            f.write(f"{s}\n")
            f.write(f"<!DOCTYPE html>\n")
            f.write(f"<html>\n")
            f.write(f"<head>\n")
            f.write(f"<title>Off_Campus_Drive</title>\n")
            f.write(f"{b}\n")
            f.write(f"{c}\n")
            f.write(f"</head>\n")
            f.write(f"<body>")
            f.write(f'<div class="offp">\n')
            f.write(f"<h1><br><br>Off Campus Drives</h1>\n")
            for job in jobs:
                company_name = job.find('div',class_ ='td-module-meta-info').encode('utf-8')
                co=company_name.decode('ascii','ignore')
                f.write(f"<br>")
                f.write(f"<h3> Company : {i}</h3>\n")
                f.write(f"<h4><br> {co} <br></h4> \n ")
                i+=1
            f.write(f'</div>')
            f.write(f"</body>\n")
            f.write(f"</html>\n")
            f.write(f"{be}\n")
            f.close()
    except:
        with open(f'templates\pages\offc.html','w') as f :
            f.write(f"<h1>Check your internet connectivity</h1>\n")
        f.close()
    return render(request,'pages/offc.html')


def test(request):
    return render(request, 'pages/test.html')


def learn(request):
    return render(request, 'pages/learn.html')

def coding(request):
    return render(request, 'pages/coding.html' )

@csrf_exempt
def students(request):
    users = User.objects.all()
    context = {'users': users}
    return render(request, 'pages/students.html', context)

def result(request):
    return render(request, 'pages/result.html')

def python(request):
    return render(request, 'pages/python.html')

def java(request):
    return render(request, 'pages/java.html')

def gd(request):
    return render(request, 'pages/gd.html')

@csrf_exempt
def drives(request):
    drives = Drives.objects.all().order_by('-drive_cdate').annotate(num_participants=Count('registered'))
    context={ 'drives':drives}
    
    return render(request,"pages/drives.html",context=context)

@csrf_exempt
def getyourdrives(request):
    reg = Registered.objects.filter(user=request.user)
    context={
        'reg':reg
    }
    return render(request,'pages/yourdrives.html',context)

@csrf_exempt
def unregister(request,id):
    Registered.objects.filter(id=id).delete()
    return redirect('/getyourdrives')

@csrf_exempt
def regdrive(request,id):
    drive = Drives.objects.filter(pk=id).first()
    # print(drive.id)
    # tags = drive.drive_tags.split(',')
    context={
        'drive':drive,
        # 'tags':tags
    }
    return render(request,'pages/registerpage.html',context)
    

@csrf_exempt
def drivecreate(request):
    if request.method=="POST":
        drive_author = request.user
        drive_name = request.POST.get('dname')
        drive_role = request.POST.get('drole')
        drive_desc1 = request.POST.get('mydes')
        drive_pckg = request.POST.get('dpckg')
        drive_date = request.POST.get('ddate')
        drive_bklgs = request.POST.get('dbklgs')
        drive_cgpa = request.POST.get('dcgpa')
        drive_img = request.FILES.get('dimg')
        drive_cdate = datetime.datetime.now()
        id = str(uuid.uuid4())
        # drives = Drives.objects.all().order_by('drive_cdate')
        # drives=drives,drive_cdate=drive_cdate
        eve=Drives(drive_author=drive_author,drive_name=drive_name,drive_role=drive_role,drive_desc=drive_desc1,drive_pckg=drive_pckg,drive_date=drive_date,drive_bklgs=drive_bklgs,drive_cgpa=drive_cgpa,drive_img=drive_img,drive_cdate=drive_cdate,id=id)
        context = {'eve': eve}
        eve.save()
        
        subject = 'New Placement drive details'
        message = f"""
        <html>
        <body>
        <p>Hello,</p>
        <p>A new drive '{drive_name}' has been created by Placement Cell, ASIET.</p>
        <p>Drive details:</p>
        <ul>
        <li>Role: {drive_role}</li>
        <li>Package: {drive_pckg}</li>
        <li>Date: {drive_date}</li>
        <li>Backlogs: {drive_bklgs}</li>
        <li>CGPA: {drive_cgpa}</li>
        </ul>
        <p>Description: {drive_desc1}</p>
        <img src="{{ drive_img }}" alt="Drive Image">

        </body>
        </html>
        """
        from_email = 'placementcellasiet@outlook.com'
        recipient_list = [user.email for user in User.objects.all()]
        send_mail(subject, message, from_email, recipient_list, html_message=message)

        # subject = 'New Placement drive details'
        # user=User.objects.all()
        # message = f"Hello,\n\nA new drive '{drive_name}' has been created by Placement Cell, ASIET.\n\nDrive details:-\n\nRole: {drive_role}\nPackage: {drive_pckg}\nDate: {drive_date}\nBacklogs: {drive_bklgs}\nCGPA: {drive_cgpa}\n\nDescription: {drive_desc1}"
        # from_email = 'placementcellasiet@outlook.com'
        # recipient_list = [user.email for user in User.objects.all()]
        # send_mail(subject, message, from_email, recipient_list)
        
        return redirect('/cordinator')
    return render(request,'pages/createdrive.html',context)

@csrf_exempt
def drivedelete(request,id):
    drive = Drives.objects.filter(id=id).delete()
    return redirect("/cordinator")

@csrf_exempt
def cordinator(request):
    reg1=None
    drives = Drives.objects.annotate(num_participants=Count('registered')).filter(drive_author=request.user)
    reg=Registered.objects.filter(drive__drive_author=request.user)
    count_drives = len(drives)
    placedstudents = Placedstudent.objects.all()
    count_reg = len(reg)
    placed_count = len(placedstudents)
    action = request.GET.get('action')
    if action=="filter_drives":
        if request.method=="POST":
            idd = request.POST['drive']
            reg = Registered.objects.filter(drive__drive_author=request.user,drive__id=idd)
            if reg:
                reg1 = reg[0]
    
    context={ 'placedcount':placed_count,'Placedstudent':placedstudents,'drives':drives, 'regis':reg, 'count_drive':count_drives,'count_reg':count_reg,'reg1':reg1}
    return render(request,'pages/coordinator.html',context)


def createdrive(request):
    return render(request, 'pages/createdrive.html')

@csrf_exempt
def checkout(request,id):
    eve = Drives.objects.get(pk=id)
    profile = Profile.objects.get(user=request.user)
    # print(profile.cgpa)
    # print(profile.bklgs)
    if profile.cgpa == None or profile.bklgs == None:
        messages.success(request, "Request your class tutor to upload your cgpa and no. of backlogs if any.")
        return redirect('/getyourdrives')
    elif float(profile.cgpa) >= float(eve.drive_cgpa) and int(profile.bklgs) <= int(eve.drive_bklgs):
        Registered.objects.create(user=request.user, drive=eve)
        messages.success(request, "Drive registered successfully.")
        return redirect('/getyourdrives')
    else:
        messages.error(request, "You are not eligible for this drive.")
        return redirect('/getyourdrives')

@csrf_exempt
def import_students(request):
    if request.method == 'POST':
        file = request.FILES['file']
        file_path = os.path.join('media', 'student.xlsx')
        with open(file_path, 'wb') as f:
            f.write(file.read())
        df = pd.read_excel(file_path)
        os.remove(file_path)
        # Clear existing data
        Student.objects.all().delete()
        # Import new data
        for index, row in df.iterrows():
            student = Student(
                name=row['Name'],
                roll_no=row['Roll No.'],
                cgpa=row['CGPA'],
                email=row['Email'],
                bklgs=row['Backlogs'],
            )
            student.save()
        messages.error(request, "Imported Successfully")
        return redirect('/cs')
    else:
        return render(request, 'pages/excelfile.html')
      
    
def students(request):
    return render(request, 'pages/students.html')       

@csrf_exempt
def show_studentcs(request):
    students = Student.objects.all()
    context = {
        'studentcs': students,
    }
    return render(request, 'pages/cs.html', context)

@csrf_exempt
def show_studentec(request):
    students = Placedstudent.objects.all()
    context = {
        'studentec': students,
    }
    return render(request, 'pages/ec.html', context)

@csrf_exempt
def show_studenteee(request):
    students = Student.objects.all()
    context = {
        'studenteee': students,
    }
    return render(request, 'pages/eee.html', context)

@csrf_exempt
def show_studentmech(request):
    students = Student.objects.all()
    context = {
        'studentmech': students,
    }
    return render(request, 'pages/mech.html', context)

@csrf_exempt
def view_document(request, id):
    mymodel = get_object_or_404(Profile, id=id)
    if not mymodel.resume:
        raise Http404("No document found")
    else:
        response = FileResponse(mymodel.resume, content_type='application/pdf')
        return response

@csrf_exempt
def import_placedstudents(request):
    if request.method == 'POST':
        file = request.FILES['file']
        file_path = os.path.join('media', 'placedstudent.xlsx')
        with open(file_path, 'wb') as f:
            f.write(file.read())
        df = pd.read_excel(file_path)
        os.remove(file_path)
        # Clear existing data
        Placedstudent.objects.all().delete()
        # Import new data
        for index, row in df.iterrows():
            placed = Placedstudent(
                name=row['Name'],
                roll_no=row['Roll No.'],
                company=row['Company'],
                dept=row['Department'],
                pck=row['Package'],
            )
            placed.save()
        messages.error(request, "Imported Successfully")
        return redirect('/cordinator')
    else:
        return render(request, 'pages/excelfiles.html')
      
# def import_placedstudents_ec(request):
#     if request.method == 'POST':
#         file = request.FILES['file']
#         file_path = os.path.join('media', 'placedstudent.xlsx')
#         with open(file_path, 'wb') as f:
#             f.write(file.read())
#         df = pd.read_excel(file_path)
#         os.remove(file_path)
#         # Clear existing data
#         Placedstudent.objects.all().delete()
#         # Import new data
#         for index, row in df.iterrows():
#             placed = Placedstudent(
#                 name=row['Name'],
#                 roll_no=row['Roll No.'],
#                 company=row['Company'],
#                 dept=row['Department'],
#                 pck=row['Package'],
#             )
#             placed.save()
#         messages.error(request, "Imported Successfully")

#     return render(request, 'pages/ec.html', {'result': 'Imported Successfully'})


def contact(request):
    if request.method=="POST":
        name = request.POST.get('name')
        from_email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        recipient_list = ["placementcellasiet@outlook.com"]
        send_mail(subject, message, from_email, recipient_list, html_message=message)
        return redirect('http://127.0.0.1:8000/')
    return render(request,'pages/home.html')