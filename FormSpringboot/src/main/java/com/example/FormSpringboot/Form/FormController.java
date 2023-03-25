package com.example.FormSpringboot.Form;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

//@CrossOrigin(origins={"*"},maxAge = 2400,allowCredentials = "false")
@RestController
@CrossOrigin
@RequestMapping("api/v1/root")


public class FormController {
    @Autowired
    FormRepository formrepo;

//    @RequestMapping(value={"/adddata"},method= RequestMethod.POST)

    @PostMapping(path="/add")
    String addname(@RequestBody Form newformdata){
        formrepo.save(newformdata);
        return "saved";
    }

}
