# Generated by Django 4.2.6 on 2023-11-17 13:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0015_rmaitem_group'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rmaitem',
            name='assigned_technician',
        ),
        migrations.RemoveField(
            model_name='rmaitem',
            name='group',
        ),
    ]
