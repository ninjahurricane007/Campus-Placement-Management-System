from django.db import models
from django.contrib.auth.models import User
import uuid
from import_export import resources
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,primary_key=True)
    ph_num = models.TextField(max_length=10,null=True,blank=True)
    addr = models.TextField(null=True,blank=True)
    clg_name = models.CharField(max_length=50,null=True,blank=True)
    sem = models.CharField(max_length=10,null=True,blank=True)
    brch = models.TextField(null=True,blank=True)
    cgpa= models.FloatField(null=True,blank=True)
    bklgs= models.IntegerField(null=True,blank=True)
    website = models.TextField(null=True,blank=True)
    github = models.TextField(null=True,blank=True)
    linkedin = models.TextField(null=True,blank=True)
    stkoflw = models.TextField(null=True,blank=True)
    codechef = models.TextField(null=True,blank=True)
    dp_img = models.ImageField(null=True,blank=True,upload_to="images/")
    resume = models.ImageField(null=True,blank=True,upload_to="documents/")
    isCordinator = models.BooleanField(default=False, null=True, blank=True)

    def __str__(self):
        return str(self.user)
    

class Drives(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    drive_author = models.ForeignKey(User,on_delete=models.CASCADE)
    drive_name = models.CharField(max_length=255,default="",null=True,blank=True)
    drive_role = models.CharField(max_length=255,default="",null=True,blank=True)
    drive_desc = models.TextField(default="",null=True,blank=True)
    drive_pckg = models.CharField(max_length=255,default="",null=True,blank=True)
    drive_date = models.CharField(max_length=255,default="",null=True,blank=True)
    drive_cdate = models.CharField(max_length=255,default="",null=True,blank=True)
    drive_bklgs = models.CharField(max_length=255,default="",null=True,blank=True)
    drive_cgpa = models.CharField(max_length=255,default="",null=True,blank=True)
    drive_img = models.ImageField(null=True,blank=True,upload_to="images/")
    
    
    def __str__(self):
        return self.drive_name+' | '+self.drive_author.username
    
class Registered(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    drive = models.ForeignKey(Drives,on_delete=models.CASCADE)
    user = models.ForeignKey(User,on_delete=models.CASCADE)


class Student(models.Model):
    name = models.CharField(max_length=100)
    roll_no = models.CharField(max_length=100)
    cgpa = models.FloatField()
    email = models.EmailField()
    bklgs = models.IntegerField(default=0)

class Placedstudent(models.Model):
    name = models.CharField(max_length=100)
    roll_no = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    dept = models.CharField(max_length=100)
    pck = models.FloatField(default=0)

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    regno = models.CharField(max_length=20)




# class Student(models.Model):
#     email = models.EmailField()
#     name = models.CharField(max_length=255)
#     roll_no = models.CharField(max_length=15)
#     year = models.CharField(max_length=15)

# class StudentResource(resources.ModelResource):

#     class Meta:
#         model = Student
#         import_id_fields = ["email", "roll_no"]
#         skip_unchanged = True
#         use_bulk = True



# class Employee(models.Model):       
#     Empcode = models.CharField(max_length=10, default='')
#     firstName = models.CharField(max_length=150,null=True)
#     middleName = models.CharField(max_length=100,null=True)    
#     lastName = models.CharField(max_length=100,null=True)
#     email = models.CharField(max_length=30,null=True)
#     phoneNo = models.CharField(max_length=12, default='',null=True)
#     address = models.CharField(max_length=500, default='',null=True)     
#     DOB = models.DateField(null=True, blank=True)   
#     gender = models.CharField(max_length=5, default='',null=True)
#     qualification = models.CharField(max_length=50,default='',null=True) 
#     salary = models.FloatField(max_length=50,default='',null=True)   
     
#     def __str__(self):
#         return self.firstName
                 
#     objects = models.Manager()