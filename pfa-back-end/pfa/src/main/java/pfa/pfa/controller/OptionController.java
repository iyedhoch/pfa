package pfa.pfa.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;



import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfa.pfa.entity.Option;
import pfa.pfa.entity.User;
import pfa.pfa.service.Option.OptionService;
import pfa.pfa.service.User.UserService;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
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
    public Option addoption(@RequestBody Option option){
        return optionService.addoption(option);

    }

    @PutMapping("{id}")
    public void updateoption(@PathVariable long id ,@RequestBody Option option){
        optionService.updateoption(id,option);
    }

    @DeleteMapping("{id}")
    public void deleteoption(@PathVariable long id){
        optionService.deleteoption(id);
    }
}
