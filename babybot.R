
?rtweet
  
handles <- fread("handles.csv")

View(handles)
handles <- as.vector(handles$V1)

stream_tweets(q = "handles", timeout = 30, parse = TRUE, token = NULL,
              file_name = NULL, verbose = TRUE)
stream_tweets2(..., dir = NULL, append = FALSE)

get_timeline(DonaldNorcross, n = 20, max_id = NULL, home = FALSE,
             parse = TRUE, check = TRUE, token = NULL)
?get_timeline
