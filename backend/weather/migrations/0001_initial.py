# Generated by Django 5.0 on 2024-12-08 07:25

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="RecentSearch",
            fields=[
                (
                    "city",
                    models.CharField(max_length=255, primary_key=True, serialize=False),
                ),
                ("timestamp", models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                "db_table": "recent_searches",
            },
        ),
        migrations.CreateModel(
            name="WeatherCache",
            fields=[
                (
                    "city",
                    models.CharField(max_length=255, primary_key=True, serialize=False),
                ),
                ("data", models.JSONField()),
                ("timestamp", models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                "db_table": "weather_cache",
            },
        ),
    ]