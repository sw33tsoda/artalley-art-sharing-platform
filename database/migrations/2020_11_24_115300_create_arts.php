<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('arts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('caption');
            $table->string('description');
            $table->string('art');
            $table->string('dimensional');
            $table->string('privacy');
            $table->bigInteger('art_channel_id')->unique()->unsigned();
            $table->bigInteger('user_id')->unique()->unsigned();
            $table->bigInteger('post_id')->unique()->unsigned();
            $table->timestamps();
        });
        
        Schema::table('arts', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
            $table->foreign('art_channel_id')->references('id')->on('art_channels')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('arts');
    }
}
