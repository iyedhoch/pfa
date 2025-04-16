package pfa.pfa.service.Option;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;
import pfa.pfa.entity.Option;

import java.util.List;

@Service
@RestController
public abstract class OptionServiceImp implements OptionService{
    @Override
    public List<Option> getalloption() {
        return List.of();
    }

    @Override
    public Option addoption(Option option) {
        return null;
    }

    @Override
    public void deleteoption(long id) {

    }

    @Override
    public void updateoption(long id,Option option){

    }
}
