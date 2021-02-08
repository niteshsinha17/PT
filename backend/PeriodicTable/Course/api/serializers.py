from rest_framework.serializers import ModelSerializer
from Course.models import Chapter, Topic
from account.models import Profile


class TopicSerializer(ModelSerializer):
    class Meta:
        model = Topic
        fields = ['topic_name', 'slug', 'id', 'read_time']


class ChapterSerializer(ModelSerializer):
    # it is to get many chapter
    topics = TopicSerializer(many=True, read_only=True)

    class Meta:
        model = Chapter
        fields = ['chapter_name', 'id', 'slug', 'topics']


class ChaptersSerializer(ModelSerializer):
    # it is to get only one chapter

    class Meta:
        model = Chapter
        fields = ['slug', 'chapter_name']


class ProfileCourseSerializer(ModelSerializer):
    current_chapter = ChaptersSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = ['current_chapter']
