<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePosts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('subheading');
            $table->string('description');
            $table->string('art_ids');
            $table->string('privacy');
            $table->bigInteger('user_id')->unique()->unsigned();
            $table->bigInteger('art_channel_id')->unique()->unsigned();
            $table->timestamps();
        });
        
        Schema::table('posts', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('posts');
    }
}
