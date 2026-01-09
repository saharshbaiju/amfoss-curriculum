#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <readline/readline.h>
#include <unistd.h>
#include <sys/wait.h>
#include <stdbool.h>
#include <signal.h>

pid_t background_pids[100];
int background_process_cnt = 0;




void signal_handler(int sig){
    for (int i = 0; i < background_process_cnt; i++){
       char temp[32];
       int len = sprintf(temp, "pid : %d\n",background_pids[i]);
       write(1,temp,len);
    }
}

void remove_completed() {
    for (int i = 0; i<background_process_cnt;i++){
        pid_t done = waitpid(background_pids[i],NULL,WNOHANG);
        if (done>0){
            // i done shift left login
            for (int j = i;j <(background_process_cnt-1);j++){
                background_pids[j] = background_pids[j+1];

            }
        background_process_cnt--;
        i--;
        }
    }
}

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
    char **arr;

    

    signal(SIGINT,signal_handler);
    signal(SIGTSTP,SIG_IGN);
    while (terminal_on)
    {
        remove_completed();

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

        // According to feed back build-in pwd

        if (strcmp(result[0],"pwd")==0){
            char * pwd = getcwd(NULL,0);
            if (pwd == NULL){
                printf("failed to get current working directory");
                perror("pwd");
                free(pwd);
            }else{
                printf("%s\n",pwd);
                free(pwd);
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
                background_pids[background_process_cnt++] = child_pid;
            }else{
                waitpid(child_pid, &stat_loc,WUNTRACED);
            }
            
            
        }
        free(input);
        free(result);
        
    
        
    }
    return 0;
}

