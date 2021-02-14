Feature: Edit work iten

    This feature is to create to do list


Scenario Outline: Test edit work item functionality
        Given User is on todomvc page
        Then User add new work item as "<NewItem>"
        Then New item should be added in the list as "<NewItem>"
        Then User edit work item "<NewItem>"  as "<UpdateItem>" 
        Then New item should be added in the list as "<UpdateItem>"

        Examples:
            | NewItem | UpdateItem |
            | Review Code  |  Analysis  |


Scenario Outline: To verify no empty strings are entered
        Given User is on todomvc page
        Then User add new work item as "<NewItem>"
        Then New item should be added in the list as "<NewItem>"
        Then User edit work item "<NewItem>" as empty string
        Then Empty sting should not be updated

        Examples:
            | NewItem |
            | Review Test  |