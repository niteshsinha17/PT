from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer


class AccountSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    # def create(self, validated_data):
    #     profile_data = validated_data.pop('profile')
    #     password = validated_data.pop('password')
    #     user = User(**validated_data)
    #     user.set_password(password)
    #     user.save()
    #     # User.objects.create(user=user, **profile_data)
    #     return user
