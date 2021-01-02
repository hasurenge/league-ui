import React from "react";
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Box,
  Divider,
  Text
} from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";

export interface Notification {
  head: string;
  body: string;
}

interface NotificationsProps {
  notifications: Notification[];
}

export const Notifications: React.FC<NotificationsProps> = ({
  notifications
}) => {
  const renderNotification = (
    notification: Notification,
    drawDivider?: boolean
  ) => (
    <Box w="100%">
      {drawDivider && <Divider mb={2} />}
      <Text fontSize="notificationHead">{notification.head}</Text>
      <Text fontSize="notificationBody">{notification.body}</Text>
    </Box>
  );

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button
          leftIcon={<FiAlertCircle size="2rem" />}
          iconSpacing={0}
          ml={4}
          variant="ghost"
          width="1rem"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>Notifications</PopoverHeader>
        <PopoverBody>
          {notifications.length > 0 ? (
            notifications.map((notification, i) =>
              renderNotification(notification, i > 0)
            )
          ) : (
            <Text>No notification to be displayed.</Text>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
