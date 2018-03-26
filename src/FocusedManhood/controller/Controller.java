package FocusedManhood.controller;

import FocusedManhood.MainApp;
import javafx.fxml.FXML;
import javafx.geometry.Rectangle2D;
import javafx.scene.layout.AnchorPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebEvent;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

import java.net.URL;

public class Controller extends MainApp
{
    private Stage primaryStage;
    private AnchorPane rootLayout;

    @FXML
    private WebView webView;

    public void setUrl()
    {
        WebEngine webEngine = webView.getEngine();
        final URL urlHome = getClass().getResource( "home.html" );
        webEngine.load( urlHome.toExternalForm() );

        webEngine.setOnResized( (WebEvent<Rectangle2D> event ) -> {
                System.out.println("Window resized");
        });
    }

    private void setMainApp( Controller controller )
    {
    }

    public void setPrimaryStage( Stage primaryStage )
    {
    }

    public void setRootLayout( AnchorPane rootLayout )
    {
    }
}
