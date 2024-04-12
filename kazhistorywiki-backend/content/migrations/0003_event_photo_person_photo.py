# Generated by Django 5.0.4 on 2024-04-12 20:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0002_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='events_photos/'),
        ),
        migrations.AddField(
            model_name='person',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='persons_photos/'),
        ),
    ]
