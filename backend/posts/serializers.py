from rest_framework import serializers
from posts.models import Post, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','name']

class PostSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)  # ✅ JSON çıktısı için
    category_ids = serializers.PrimaryKeyRelatedField(          # ✅ Yeni post oluştururken
        many=True,
        queryset=Category.objects.all(),
        source='categories',
        write_only=True
    )

    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'content',
            'author',
            'date',
            'updated',
            'categories',     
            'category_ids'    
        ]

