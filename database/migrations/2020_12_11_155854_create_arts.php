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
            $table->text('title');
            $table->text('caption')->nullable();
            $table->text('description')->nullable();
            $table->text('tags')->nullable();
            $table->text('art');
            $table->bigInteger('privacy_id')->unsigned();
            $table->bigInteger('dimension_id')->unsigned();
            $table->bigInteger('art_channel_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('showcase_id')->unsigned()->nullable();
            $table->timestamps();
        });
        
        Schema::table('arts', function (Blueprint $table) {
            $table->foreign('privacy_id')->references('id')->on('privacies');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('dimension_id')->references('id')->on('dimensions');
            $table->foreign('art_channel_id')->references('id')->on('art_channels');
            $table->foreign('showcase_id')->references('id')->on('showcases');
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
