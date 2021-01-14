from django.urls import path
from . import views
from django.conf.urls import url

urlpatterns = [
	path('', views.index),
    path('email/', views.email),
    path('index/', views.index),
    url(r'^view-pdf/$', views.pdf_view, name='pdf_view'),
]