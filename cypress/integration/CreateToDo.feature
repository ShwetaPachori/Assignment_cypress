Feature: Create ToDo List

    This feature is to create to do list

    Scenario Outline: Test create list functionality
        Given User is on todomvc page
        Then User add new work item as "<NewItem>"
        Then New item should be added in the list as "<NewItem>"
        And list footer should be updated
        And Text filed should be cleared

        Examples:
            | NewItem |
            | Design  |





    Scenario Outline: To Verify Input text is trim
        Given User is on todomvc page
        Then User add new work item with as "<NewItem>" leading and trailing spaces  
        Then New item should be added in the list as "<NewItem>"
        

        Examples:
            | NewItem |
            | Testing  |