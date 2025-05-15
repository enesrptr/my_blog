from django.db import models

class Posts(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField
    author = models.CharField(max_length = 100)
    date = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title