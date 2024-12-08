from django.db import models
from django.utils import timezone

# Create your models here.

class WeatherCache(models.Model):
    city = models.CharField(max_length=255, primary_key=True)
    data = models.JSONField()
    timestamp = models.DateTimeField(default=timezone.now)

    class Meta:
        db_table = 'weather_cache'

    def is_valid(self):
        return (timezone.now() - self.timestamp).total_seconds() < 1800  # 30 minutes

class RecentSearch(models.Model):
    city = models.CharField(max_length=255, primary_key=True)
    timestamp = models.DateTimeField(default=timezone.now)

    class Meta:
        db_table = 'recent_searches'
