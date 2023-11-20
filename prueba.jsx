        
class Technician(models.Model):
user = models.OneToOneField(User, on_delete=models.CASCADE, null=True,blank=True)
rma_items = models.ManyToManyField('RmaItem', blank=True)
technician_group = models.ForeignKey(Group, on_delete=models.SET_NULL, null=True, blank=True)
def __str__(self):
        return self.user.username if self.user else "No User"



        class TechnicianSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(source='user.id')
    username = serializers.CharField(source='user.username')
    rma_items = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Technician
        fields = ['id', 'user_id', 'username', 'rma_items']
