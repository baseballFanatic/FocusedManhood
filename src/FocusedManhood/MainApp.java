package FocusedManhood;

import FocusedManhood.controller.Controller;
import javafx.application.Application;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.layout.AnchorPane;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

import java.io.IOException;

public class MainApp extends Application {
    private Stage primaryStage;
    private AnchorPane rootLayout;

    @FXML
    private WebView webView;

    public MainApp() {}

    @Override
    public void start(Stage primaryStage) throws Exception{
        this.primaryStage = primaryStage;
        this.primaryStage.setTitle( "Focused Manhood" );
        primaryStage.getIcons().add( new Image( "file:src/FocusedManhood/resources/images/if_Bible_51851.png" ) );

        initRootLayout();

    }

    private void initRootLayout()
    {
        try {
            FXMLLoader loader = new FXMLLoader(  );
            loader.setLocation( MainApp.class.getResource( "view/RootLayout.fxml" ) );
            rootLayout = ( AnchorPane ) loader.load();

            Controller controller = ( Controller ) loader.getController();
            controller.setPrimaryStage( this.primaryStage );
            controller.setRootLayout( this.rootLayout );
            controller.setUrl();

            Scene scene = new Scene( rootLayout );
            scene.getStylesheets().add( getClass().getResource( "segmented.css" ).toExternalForm() );
            primaryStage.setScene( scene );
            primaryStage.setResizable( false );
            primaryStage.show();

        } catch ( IOException e )
        {
            e.printStackTrace();
        }
    }


    public static void main(String[] args) {
        launch(args);
    }
}
