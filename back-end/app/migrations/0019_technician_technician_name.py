# Generated by Django 4.2.6 on 2023-12-31 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0018_remove_technician_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='technician',
            name='technician_name',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
