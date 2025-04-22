package pfa.pfa.service.Option;

import org.springframework.stereotype.Service;
import pfa.pfa.entity.Option;

import java.util.List;
import java.util.Optional;

@Service
public interface OptionService {
    Option getoption(long id);

    List<Option> getalloption();

    Option addoption(Option option);

    void deleteoption(long id);

    void updateoption(long id ,Option option);

}
