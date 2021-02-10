from rest_framework.serializers import ModelSerializer
from Course.models import Chapter, Topic, DoYouKnow
from account.models import Profile


class TopicSerializer(ModelSerializer):
    class Meta:
        model = Topic
        fields = ['name', 'topic_number', 'slug', 'id', 'read_time']


class ChapterSerializer(ModelSerializer):
    # it is to get many chapter
    topics = TopicSerializer(many=True, read_only=True)

    class Meta:
        model = Chapter
        fields = ['name', 'id', 'slug', 'topics']


class ChaptersSerializer(ModelSerializer):
    # it is to get only one chapter

    class Meta:
        model = Chapter
        fields = ['slug', 'name']


class ProfileTopicSerializer(ModelSerializer):
    current_topic = TopicSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = ['current_topic']


class ProfileCourseSerializer(ModelSerializer):
    current_chapter = ChaptersSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = ['current_chapter']


class DoYouKnowSerializer(ModelSerializer):
    class Meta:
        model = DoYouKnow
        fields = ['info', 'id']
