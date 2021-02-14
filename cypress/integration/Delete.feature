Feature: Delete and clear work item

    This feature validate 'delete' button and 'clear completed' button


Scenario Outline: Test delete button functionality
        Given User is on todomvc page
        Then User add new work item as "<NewItem>"
        Then New item should be added in the list as "<NewItem>"
        Then User delete the "<NewItem>" 
        And list footer should be updated

        Examples:
            | NewItem |
            | Deploy  |

Scenario Outline: Test clear all button functionality
        Given User is on todomvc page
        Then User add new work item as "<NewItem>"
        Then New item should be added in the list as "<NewItem>"
        Then User marks the item "<NewItem>"  as complete 
        Then list footer should be updated
        Then User clicks on clear completed item button
        Then Completed item should not exist in list


        Examples:
            | NewItem |
            | Review  |

Scenario Outline: Clear button should not exist if items are already cleared
        Given User is on todomvc page
        Then User add new work item as "<NewItem>"
        Then New item should be added in the list as "<NewItem>"
        Then User marks the item "<NewItem>"  as complete 
        Then list footer should be updated
        Then User clicks on clear completed item button
        Then Clear Completed button should not be visible  


        Examples:
            | NewItem |
            | Documentation  |