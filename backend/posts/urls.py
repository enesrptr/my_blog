from django.urls import path
from .views import postList, postDetail,categoryList

urlpatterns = [
    
    path('posts/',postList, name = "post-list"),
    path('posts/<int:id>/', postDetail, name = "post-detail"),
    path('categories/', categoryList, name='category-list'),
]
