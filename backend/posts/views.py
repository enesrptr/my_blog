from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Post,Category
from .serializers import PostSerializer,CategorySerializer
from rest_framework import status


@api_view(['GET','POST'])
def postList(request):
    if request.method == "GET":
        posts = Post.objects.all()
        serializer = PostSerializer(posts,many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = PostSerializer(data = request.data)
        if serializer.is_valid():
            post = serializer.save()
            if 'category_ids' in request.data:
                post.categories.set(request.data['category_ids'])  
            return Response(PostSerializer(post).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','PUT','DELETE'])
def postDetail(request, id):
    try:
        post = Post.objects.get(pk=id)
    except Post.DoesNotExist:
        return Response({"error":"No matching record found."},status = status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = PostSerializer(post)
        return Response(serializer.data)
    
    if request.method == "PUT":
        serializer = PostSerializer(post, data=request.data)

        if serializer.is_valid():
            post = serializer.save()
            if 'category_ids' in request.data:
                post.categories.set(request.data['category_ids'])
            return Response(PostSerializer(post).data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)
    
    if request.method == "DELETE":
        post = Post.objects.get(pk=id)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['GET'])
def categoryList(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

