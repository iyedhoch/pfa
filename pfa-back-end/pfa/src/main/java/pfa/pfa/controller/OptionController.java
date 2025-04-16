package pfa.pfa.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfa.pfa.entity.Option;
import pfa.pfa.entity.User;
import pfa.pfa.service.Option.OptionService;
import pfa.pfa.service.User.UserService;

import java.util.List;

@RequestMapping("/Option")
@RestController
@RequiredArgsConstructor
public class OptionController {
    final private OptionService optionService;
    @GetMapping
    public List<Option> getalloptions() {
        return optionService.getalloption();
    }

    @PostMapping
    public Option addoption(Option option){
        return optionService.addoption(option);

    }

    @PutMapping("{id}")
    public void updateoption(@PathVariable long id , Option option){
        optionService.updateOption(id,option);
    }

    @DeleteMapping("{id}")
    public void deleteoption(@PathVariable long id){
        optionService.deleteoption(id);
    }
}
