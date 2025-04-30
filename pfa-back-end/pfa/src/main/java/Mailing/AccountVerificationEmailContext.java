package Mailing;

import org.springframework.web.util.UriComponentsBuilder;
import pfa.pfa.entity.User;

public class AccountVerificationEmailContext extends AbstractEmailContext{

    private String token;

    @Override
    public <T> void init(T context){
        User user= (User) context;

        put("firstNAme" , user.getName());
        setTemplatelocation(("mailing/email-verifacation"));
        setSubject("Complete your Regestration");
        setFrom("pfa@gmailo.com");
        setTo(user.getEmail());
    }

    public void setToken(String token){
        this.token = token;
        put("token", token);

    }

    public void buildVerifacationonUrl(final String baseUrl,final String token){
        final String url = UriComponentsBuilder.fromHttpUrl(baseUrl)
                .path("/register/verify").queryParam("token",token).toUriString();
        put("verificationUrl",url);

    }
}
