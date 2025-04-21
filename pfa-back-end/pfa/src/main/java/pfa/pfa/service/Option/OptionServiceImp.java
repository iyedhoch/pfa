package pfa.pfa.service.Option;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pfa.pfa.entity.Option;
import repositories.OptionRepository;


import java.util.List;

@Service
@RequiredArgsConstructor
public class OptionServiceImp implements OptionService {

    private final OptionRepository optionRepository;

    @Override
    public List<Option> getalloption() {
        return optionRepository.findAll();
    }

    @Override
    public Option addoption(Option option) {
        return optionRepository.save(option);
    }

    @Override
    public void deleteoption(long id) {
        optionRepository.deleteById(id);
    }

    @Override
    public void updateoption(long id, Option option) {
        Option existing = optionRepository.findById(id).orElseThrow();
        existing.setName(option.getName());
        existing.setPrice(option.getPrice());
        optionRepository.save(existing);
    }
}
