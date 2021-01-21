from django.shortcuts import render,redirect
from .forms import SignupForm
from django.contrib import messages

# Create your views here.
def register(request):
	if request.method=='POST':
		form = SignupForm(request.POST)
		if form.is_valid():
			form.save()
			username = form.cleaned_data.get('username')
			messages.success(request,'Your account created {}. Please Login'.format(username))
			return redirect('login')
	else:
		form = SignupForm()
	return render(request, 'account/register.html',{'form':form})
