package com.sathsara.book.handler;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.Map;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ExceptionResponse {

    private Integer businessErrorCode;
    private String businessExceptionDescription;
    private String error;
    private Set<String> validationErrors; //["Email is mandatory", "Password is too short", "Name is required"]
    private Map<String, String> errors;

//    {
//            "email": "Email is mandatory",
//            "password": "Password is too short",
//            "name": "Name is required"
//    }

}
