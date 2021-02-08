from rest_framework.serializers import ModelSerializer
from Element.models import Element, Block, Group


class ElementSerializer(ModelSerializer):
    class Meta:
        model = Element
        fields = ['id', 'name', 'atomic_number', 'symbol', 'period',
                  'group', 'metal', 'non_metal', 'metalloid', 'type',
                  ]


class GroupSerializer(ModelSerializer):
    elements = ElementSerializer(many=True, read_only=True)

    class Meta:
        model = Group
        fields = ['elements']


class BlockSerializer(ModelSerializer):
    groups = GroupSerializer(many=True, read_only=True)

    class Meta:
        model = Block
        fields = ['name', 'groups']


class ElementDetailSerializer(ModelSerializer):
    class Meta:
        model = Element
        fields = '__all__'
