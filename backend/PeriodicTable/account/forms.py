from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile

class SignupForm(UserCreationForm):

	"""docstring for UserRegistration"""
	email = forms.EmailField() # required=True(default)
	#dob = forms.DateField()


	class Meta:
		model = User
		fields = ['username', 'email', 'password1', 'password2']
		# fields = ['username', 'email', 'dob', 'password1', 'password2']
	