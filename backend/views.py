from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import EmailSerializer
from .models import Email
from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

# SendGrid imports
import os
from sendgrid import SendGridAPIClient
from django.conf import settings
from sendgrid.helpers.mail import Mail

# AWS
import boto

index = never_cache(TemplateView.as_view(template_name="index.html"))

@api_view(['POST'])
def email(request):

	serializer = EmailSerializer(data=request.data)
	if serializer.is_valid():
		message = Mail(
		from_email='ryanmcculloughuc@gmail.com',
		to_emails='ryanmcculloughuc@gmail.com',
		subject=request.data['subject'],
		html_content=f"<strong>{request.data['email'] + ' ' + request.data['message']}</strong>")

		sg = SendGridAPIClient(settings.SENDGRID_API_KEY)
		response = sg.send(message)

	return HttpResponse('Corvette Corvette')

def pdf_view(request):
	conn = boto.connect_s3(settings.AWS_ACCESS_KEY_ID, settings.AWS_SECRET_ACCESS_KEY)
	bucket = conn.get_bucket(settings.AWS_STORAGE_BUCKET_NAME)
	s3_file_path = bucket.get_key('Resume.pdf')
	url = s3_file_path.generate_url(expires_in=600) # expiry time is in seconds

	return HttpResponseRedirect(url)
