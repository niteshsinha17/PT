from rest_framework.serializers import ModelSerializer
from Element.models import Element, Block


class ElementSerializer(ModelSerializer):
    class Meta:
        model = Element
        fields = ['id', 'name', 'atomic_number', 'symbol', 'period',
                  'group', 'metal', 'non_metal', 'metalloid', 'type',
                  ]


class BlockSerializer(ModelSerializer):
    elements = ElementSerializer(many=True, read_only=True)

    class Meta:
        model = Block
        fields = ['name', 'elements']


class ElementDetailSerializer(ModelSerializer):
    class Meta:
        model = Element
        fields = '__all__'
