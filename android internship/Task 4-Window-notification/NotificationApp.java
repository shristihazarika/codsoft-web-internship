import javax.swing.*;
import java.awt.*;

public class NotificationApp {

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {

            JFrame frame = new JFrame("Window Notification App");
            frame.setSize(350, 200);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setLocationRelativeTo(null);

            JButton button = new JButton("Show Notification");

            button.addActionListener(e -> {
                JOptionPane.showMessageDialog(
                        frame,
                        "Hello Shristi! This is your desktop notification 🔔",
                        "Notification",
                        JOptionPane.INFORMATION_MESSAGE
                );
            });

            frame.setLayout(new BorderLayout());
            frame.add(button, BorderLayout.CENTER);
            frame.setVisible(true);
        });
    }
}
