package pfa.pfa.service.Option;

import org.springframework.stereotype.Service;
import pfa.pfa.entity.Option;

import java.util.List;

@Service
public interface OptionService {
    List<Option> getalloption();

    Option addoption(Option option);

    void deleteoption(long id);

    void updateOption(long id ,Option option);

}
