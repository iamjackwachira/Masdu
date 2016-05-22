from django.conf.urls import url, include
from rest_framework import routers
from authentication import views
from rest_framework.routers import DefaultRouter


app_name = 'authentication'
router = DefaultRouter()
router.register(r'login', views.LoginView)
router.register(r'register', views.SignUpView)

urlpatterns = [
    url(r'^', include(router.urls)),
]