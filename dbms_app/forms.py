from django import forms
from django.contrib.auth.forms import UserCreationForm,UserChangeForm
from django.contrib.auth.models import User
from .models import Profile,Customer,Product,Employee,Supplier
from django.db.models import Max

class RegistrationForm(UserCreationForm):

    class Meta:
        model = User
        fields = (
            'username',
            'password1',
            'password2'
        )

    def save(self,commit=True):
        user = super(RegistrationForm,self).save(commit=False)


        if commit:
            user.save()

            return user

class CustomerProfileForm(forms.ModelForm):

    class Meta:
        model = Profile
        fields = (
            'name',
            'address',
            'agentid',

        )

    def save(self,commit=True):
        profile = super(CustomerProfileForm,self).save(commit=False)
        profile.name = self.cleaned_data['name']
        profile.address = self.cleaned_data['address']
        id = User.objects.latest('date_joined')
        profile.user = id
        profile.user_type = 'C'
        profile.agentid = self.cleaned_data['agentid']
        
        if commit:
            profile.save()
            cust = Customer(id = Customer.objects.all().aggregate(Max('id'))['id__max'] +1, name = profile.name , address = profile.address, agentid = profile.agentid)
            cust.save()

            return profile

class EmployeeProfileForm(forms.ModelForm):

    class Meta:
        model = Profile
        fields = (
            'name',
            'address',

        )

    def save(self,commit=True):
        profile = super(EmployeeProfileForm,self).save(commit=False)
        profile.name = self.cleaned_data['name']
        profile.address = self.cleaned_data['address']
        id = User.objects.latest('date_joined')
        profile.user = id
        profile.user_type = 'E'

        if commit:
            profile.save()
            # emp = Employee(id = Employee.objects.all().aggregate(Max('id'))['id__max'] +1, name = profile.name , address = profile.address)
            # emp.save()
            return profile

class SupplierProfileForm(forms.ModelForm):

    class Meta:
        model = Profile
        fields = (
            'name',
            'address',

        )

    def save(self,commit=True):
        profile = super(SupplierProfileForm,self).save(commit=False)
        profile.name = self.cleaned_data['name']
        profile.address = self.cleaned_data['address']
        id = User.objects.latest('date_joined')
        profile.user = id
        profile.user_type = 'S'


        if commit:
            profile.save()
            # supp = Supplier(id = Supplier.objects.all().aggregate(Max('id'))['id__max'] +1, name = profile.name , address = profile.address)
            # supp.save()

            return profile
# class BuyPorscheForm(forms.ModelForm):

#     class Meta:
#         model = Product
#         fields = (
#             'description',
#             'location',
#             'phone_number',
#             'birth_date',

#         )
