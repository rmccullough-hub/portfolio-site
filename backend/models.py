from django.db import models

# Create your models here.
class Email(models.Model):
	subject = models.CharField(max_length=200)
	email = models.EmailField(max_length=200)
	message = models.CharField(max_length=300)