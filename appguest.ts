#! /usr/bin/env node

// Solution # 14
// Guest list: If you could invite anyone, living or deceased to dinner, who would you invite? Make a list include atleast 3 people 
// You'd like to invite to dinner then use your list to print a message to each person, inviting them to dinner. 


let guest_list: string[]= ['Adeel','Ayesha','Aiza','Fatima'];
for (let i=0; i<guest_list.length;i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nwe invited you on dinner tomorrow\n\n thank you');
}