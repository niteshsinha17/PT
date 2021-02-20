from rest_framework.serializers import ModelSerializer
from Course.models import Chapter, Topic, DoYouKnow
from account.models import Progress


class TopicSerializer(ModelSerializer):
    class Meta:
        model = Topic
        fields = ['name', 'number', 'slug', 'number']


class ChapterSerializer(ModelSerializer):
    # it is to get many chapter
    topics = TopicSerializer(many=True, read_only=True)

    class Meta:
        model = Chapter
        fields = ['name', 'number', 'slug', 'topics']


class ChaptersSerializer(ModelSerializer):
    # it is to get only one chapter

    class Meta:
        model = Chapter
        fields = ['slug', 'name']


class ProgressTopicSerializer(ModelSerializer):
    current_topic = TopicSerializer(read_only=True)

    class Meta:
        model = Progress
        fields = ['current_topic']


class ProgressCourseSerializer(ModelSerializer):
    current_chapter = ChaptersSerializer(read_only=True)

    class Meta:
        model = Progress
        fields = ['current_chapter']


class DoYouKnowSerializer(ModelSerializer):
    class Meta:
        model = DoYouKnow
        fields = ['info', 'id']
