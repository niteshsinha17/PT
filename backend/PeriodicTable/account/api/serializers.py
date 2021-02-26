from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from account.models import ChapterScore
from account.models import Profile, Progress


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


class ChapterScoreSerializer(ModelSerializer):

    class Meta:
        model = ChapterScore
        fields = ['chapter', 'attempted', 'cleared', 'quiz',
                  'scored_max', 'maximum_marks']


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ['f_name', 'l_name', 'dob', 'gender', 'email', 'phone_number']


class ProgressSerializer(ModelSerializer):
    chapter_score = ChapterScoreSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = ['topic_completed', 'current_topic', 'current_chapter',
                  'enrolled_date', 'chapter_score']
