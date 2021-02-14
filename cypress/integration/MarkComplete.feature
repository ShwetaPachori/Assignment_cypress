Feature: Mark work item as complete

    This feature is to create to do list


Scenario Outline: Test mark work item complete functionality
        Given User is on todomvc page
        Then User add new work item as "<NewItem>"
        Then New item should be added in the list as "<NewItem>"
        Then User marks the item "<NewItem>"  as complete 
        And list footer should be updated

        Examples:
            | NewItem |
            | Test  |

