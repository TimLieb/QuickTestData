<h1 style="color:CornflowerBlue">Quick Test Data</h1>

You can find my site at https://timlieb.github.io/QuickTestData/

<h2 style="color:CornflowerBlue">Contents</h2>
<ul>
    <li><a href="#foreword">Foreword</a></li>
    <li><a href="#description">Description</a></li>
    <li><a href="#guide">Guide</a></li>
    <ul>
        <li><a href="#managing-columns">Managing columns</a></li>
        <li><a href="#config-columns">Configuring column data</a></li>
        <li><a href="#gen-dataset">Generating dataset</a></li>
    </ul>
</ul>

<h2><a id="foreword"  style="color:CornflowerBlue">Foreword</a></h2>

The main purpose of this project was for me to learn more about React and Material UI. If I were to make this site again I would likely do almost everything differently with the experience I have from this.

Here are a few key things I would do differently:

<ul>
    <li>Plan out the UI ahead of time</li>
    <li>Impliment unit tests as I go along</li>
    <li>Find a better format for my file structure</li>
</ul><br>

And here are a few key things which I have yet to learn which I think would improve my site:

<ul>
    <li>Redux instead of UseReducer</li>
    <li>MUI Grid for writing cleaner HTML and CSS</li>
    <li>Better ways of styling MUI components</li>
    <li>How to impliment themes in MUI</li>
</ul>

<h2><a id="description"  style="color:CornflowerBlue">Description</a></h2>
The purpose of this site is to generate random datasets for testing purposes. The user can add and remove columns and configure each column to generate random data of different types. They can then hit the big "Generate Dataset" button and download a file in either JSON, TXT or CSV format.
<br><br>
The reason I chose to make this site as my portfolio project was because I currently work as a Data Analyst and often have need for such a tool. Therefore I believe I understand the user requirements quite well.

<h2><a id="guide"  style="color:CornflowerBlue">Guide</a></h2>
<h3><a id="managing-columns"  style="color:CornflowerBlue">Managing columns</a></h3>
To create and delete columns refer to the table on the left of the site:
<br>
<br>
<img src="public\columnsTable.png">
<br>
<br>
From here you can manage the columns which will appear in your dataset:
<ul>
    <li>You can add a column with the "ADD ITEM" button.</li>
    <li>Edit a columns name and type with the pencil icon to its right (make sure to save it with the save icon afterwards).</li>
    <li>Delete a column with the bin icon to the right of it.</li>
</ul>

<h3><a id="config-columns"  style="color:CornflowerBlue">Configuring column data</a></h3>
When you click on a row in the table on the left you will notice that the configuration panel will change. This is because the row you have selected will now be the column you are configuring.
<br>
<br>
<img src="public\config.png">
<br>
<h4 style="color:CornflowerBlue">Randomiser section:</h4>
The leftmost section is the randomiser section. Depending on the datatype of the column you will have various options regarding what data appears in the column.
<br>
<br>
<img src="public\string.png">
<br>
<br>
For example in this image our datatype is string. With a string you can modify its length and what kind of characters appear in it. Modifications are visible in the Preview section on the right.
<h4 style="color:CornflowerBlue">List Randomiser:</h4>
Strings also have a special section available which you can access with the "LIST" button at the top of the Randomiser section.
<br>
<br>
<img src="public\list.png">
<br>
<br>
In this section you can chose from some sample lists or a custom list which you yourself make. Clicking on a list will select it which you'll be able to see in the preview pane on the right.
<h4 style="color:CornflowerBlue">Additional details section:</h4>
This section is very simple. You can chose what percentage of your column data will be either "Null" or empty. Changes you make will be visible in the preview section
<br>
<br>
<img src="public\addDetails.png">
<h4 style="color:CornflowerBlue">Preview section:</h4>
The preview section exists purely to give you a snapshot of what your data will look like once generated. Whatever modifications you make in the other sections are immediately visible in this section.
<br>
<br>
<img src="public\preview.png">

<h3><a id="gen-dataset"  style="color:CornflowerBlue">Generating dataset</a></h3>
Firstly you need to press the "GENERATE DATASET" button in the top right.
<br>
<br>
<img src="public\genButton.png">
<br>
<br>
You will then be greeted with this screen:
<br>
<br>
<img src="public\gen.png">
<br>
<br>
With this you can choose how many rows you want to generate and what file type you want to download. Once done press the download button and it will download the file.
