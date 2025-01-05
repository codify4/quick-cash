import { Card } from "@/components/ui/card";

type Notification = {
    id: string;
    title: string;
    message: string;
    date: string;
    read: boolean;
};

const NotificationCard = ({ notification }: { notification: Notification }) => {
    return (
        <Card
            key={notification.id}
            className={`p-4 rounded-xl border ${
                notification.read ? 'bg-background' : 'bg-primary/5 border-primary/20'
            }`}
        >
            <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium">{notification.title}</h3>
                <span className="text-xs text-muted-foreground">
                    {notification.date}
                </span>
            </div>
            <p className="text-sm text-muted-foreground">
                {notification.message}
            </p>
        </Card>
    );
};

export default NotificationCard;