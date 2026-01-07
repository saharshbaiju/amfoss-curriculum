#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <readline/readline.h>
#include <unistd.h>
#include <sys/wait.h>
#include <stdbool.h>
#include <signal.h>


char ** get_input(char * input){
    char ** command = malloc(8 * sizeof(char *));
    if (command == NULL){
        perror("Memory allocation failed");
        exit(1);
    }

    char * seperator = " ";
    char * parsed;
    int index = 0;

    parsed = strtok(input,seperator);

    while (parsed != NULL)
    {
        command[index] = parsed;
        index ++;

        parsed = strtok(NULL,seperator);
    }

    command[index] = NULL;

    return command;
    
}



int main() {
    bool terminal_on = true;
    char * input;
    char ** result;
    pid_t child_pid;
    int stat_loc;
    bool background;

    signal(SIGINT,SIG_IGN);
    signal(SIGTSTP,SIG_IGN);
    while (terminal_on)
    {
        input = readline("sbs>>>> ");
        result = get_input(input);

        if (result[0] == NULL){
            free(input);
            free(result);
            continue;
        }

        if (strcmp(result[0],"exit")==0)
        {
            exit(1);
        }
        
        

        background = false;
        int i = 0;
        while (result[i]!= NULL)
        {
            i ++;
        }

        if (i>0 && strcmp(result[i-1],"&")==0)
        {
            background = true;
            result[i-1]=NULL;
        }
        
        
        if (strcmp(result[0], "cd") == 0) {
            if (chdir(result[1]) < 0) {
                perror(result[1]);
            }
            continue;
        }
      
        child_pid = fork();

        if (child_pid<0)
        {
            perror("Fork failed");
            exit(1);
        }
        

        if (child_pid==0)
        {
            signal(SIGINT,SIG_DFL);
            signal(SIGTSTP,SIG_DFL);
            if (execvp(result[0], result) < 0) {
                perror(result[0]);
                exit(1);
            }

        }else {
            if (background)
            {
                printf("pocess running in background pid: %d \n",child_pid);
            }else{
                waitpid(child_pid, &stat_loc,WUNTRACED);
            }
            
            
        }
        free(input);
        free(result);
        
    
        
    }
    return 0;
}

