from django.urls import path
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from .views import import_students
# from Import_Excel import settings
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('home/', views.landing, name='landing'),
    path('main/', views.main, name='main'),
    path('login/', views.user_login, name='user_login'),
    path('signup/', views.user_signup, name='user_signup'),
    path('logout/', views.user_logout, name='user_logout'),
    path('profile/', views.profile, name='profile'),
    path('editprofile/', views.editprofile, name='editprofile'),
    path('learn/', views.learn, name='learn'),
    path('test/', views.test, name='test'),
    path('offc/', views.offc, name='offc'),
    path('coding/', views.coding, name='coding'),
    path('result/', views.result, name='result'),
    path('python/', views.python, name='python'),
    path('java/', views.java, name='java'),
    path('gd/', views.gd, name='gd'),
    path('reset_password/', views.reset_password, name='reset_password'),
    path('arithmetic/', views.arithmetic, name='arithmetic'),
    path('reasoning/', views.reasoning, name='reasoning'),
    path('cquiz/', views.cquiz, name='cquiz'),
    path('result/', views.result, name='result'),
    path('drives/', views.drives, name='drives'),
    path('getyourdrives/', views.getyourdrives, name='getyourdrives'),
    path('registerpage/', views.regdrive, name='registerpage'),
    path('createdrive/', views.createdrive, name='createdrive'),
    path('cordinator/', views.cordinator, name='coordinator'),
    path('drivecreate/', views.drivecreate, name='drivecreate'),
    path('regdrive/<uuid:id>', views.regdrive, name='regdrive'),
    path('checkout/<uuid:id>', views.checkout, name='checkout'),
    path('unregister/<uuid:id>', views.unregister, name='unregister'),
    path('drivedelete/<uuid:id>', views.drivedelete, name='drivedelete'),
    path('students/', views.students, name='students'),
    path('excelfile/', import_students, name='import_students'),
    path('excelfiles/',views.import_placedstudents, name='import_students'),
    path('cs/', views.show_studentcs, name='studentcs'),
    path('ec/', views.show_studentec, name='studentec'),
    path('eee/', views.show_studenteee, name='studenteee'),
    path('reset_password/<str:uidb64>/<slug:token>/', views.reset_password, name="reset_password"),
    path('mech/', views.show_studentmech, name='studentmech'),
    path('forgot_password/', views.forgot_password, name='forgot_password'),
    path('contact/', views.contact, name='contact'),
    path('view-resume/', views.view_resume, name='view_resume'),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

# if settings.DEBUG:
#     urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)