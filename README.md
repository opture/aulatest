# Aula test part 1.

## Short descirpiton


I made the decision to go fast forward and not spend that much time on this task, setting my mind to "minimum viable product mode" :)

Metadata is extracted from the files and not read neither from JSON nor from a remote API. Which I consider to be a standard way, and there are many options and tools to maintain your libraries metadata. 
___

## To run the solution.

<pre>
<code>git clone https://github.com/opture/aulatest</code>
</pre>

<pre>
<code>npm i</code>
</pre>

<pre>
<code>npm start</code>
</pre>


___
## Endpoints

<code>localhost:3000/songs</code>

Fetches all the songs in the /songs folder. Returns array with path to each song.

<code>localhost:3000/metadata</code>

Fetches metadata for all songs. songPath is added as a property to connect metadata and song.

<code>localhost:3000/metadata/:song</code>

Fetches metadata for single song. songPath is added as a property to connect metadata and song.


## Improvements
There are some shortcuts taken here, to try to keep within the timeframe.
The tests are not relying on mocks, but on files stored in specific folders with sepcific filenames in that location. So mocks for the tests would be a definite improvement,
When doing this assignment, I came to think about that since this solution rely on the metadata in the files, I would like to change the api to be pure websockets instead (I have a thing for websockets), enabling the user to get notified when new songs are added, or removed from the library for example. 
Extract and Store the metadata in a more accesbile way to make the songs searchable.
Add the ability to search for songs
adding the ability to upload songs through the API.
Adding the ability to update metadata for files missing.
Adding the ability to remove songs from the library.
Adding the ability for users to mark songs as favourites.
Adding the ability for the user to create playlists.
...
...